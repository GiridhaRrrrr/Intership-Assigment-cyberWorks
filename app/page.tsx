"use client";

import { useState, useEffect } from 'react';
import { Search, MapPin, Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { JobCard } from '@/components/job-card';
import { CreateJobModal } from '@/components/create-job-modal';
import { Header } from '@/components/header';
import { databases, ID } from '../appwrite/config';
import { Query } from 'appwrite'; 

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  isRemote: boolean;
  postedAgo: string;
  description: string;
  logo: string;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [salaryRange, setSalaryRange] = useState([20, 100]);
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await databases.listDocuments(DB_ID, COLLECTION_ID, [
          Query.orderDesc('$createdAt')
        ]);
        const jobsFromAppwrite = response.documents.map((doc: any) => ({
          id: doc.$id,
          title: doc.title,
          company: doc.company,
          location: doc.location,
          type: doc.type,
          experience: doc.experience,
          salary: doc.salary,
          isRemote: doc.isRemote,
          postedAgo: doc.postedAgo,
          description: doc.description,
          logo: doc.logo
        }));
        setJobs(jobsFromAppwrite);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || selectedLocation === 'all' || job.location === selectedLocation;
    const matchesJobType = !selectedJobType || selectedJobType === 'all' || job.type === selectedJobType;

    const salaryNumbers = job.salary.match(/\d+/g);
    const minSalary = salaryNumbers ? parseInt(salaryNumbers[0]) / 1000 : 0;
    const maxSalary = salaryNumbers ? parseInt(salaryNumbers[1]) / 1000 : 100;
    const matchesSalary = minSalary >= salaryRange[0] && maxSalary <= salaryRange[1];

    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  const handleCreateJob = async (jobData: any) => {
    try {
      const newJob = {
        title: jobData.jobTitle,
        company: jobData.companyName,
        location: jobData.location,
        type: jobData.jobType,
        experience: '1-3 Yr Exp',
        salary: jobData.salaryRange,
        isRemote: true,
        postedAgo: 'Just now',
        description: jobData.jobDescription,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
      };

      await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), newJob);

      const response = await databases.listDocuments(DB_ID, COLLECTION_ID, [
        Query.orderDesc('$createdAt')
      ]);
      const jobsFromAppwrite = response.documents.map((doc: any) => ({
        id: doc.$id,
        title: doc.title,
        company: doc.company,
        location: doc.location,
        type: doc.type,
        experience: doc.experience,
        salary: doc.salary,
        isRemote: doc.isRemote,
        postedAgo: doc.postedAgo,
        description: doc.description,
        logo: doc.logo
      }));

      setJobs(jobsFromAppwrite);
      setIsCreateJobOpen(false);
    } catch (error) {
      console.error("Error creating job", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCreateJobClick={() => setIsCreateJobOpen(true)} />
      
      <main className="container mx-auto px-4 pb-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search By Job Title, Role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
              />
            </div>

            {/* Location Select */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="pl-10 h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-gray-50">
                  <SelectValue placeholder="Preferred Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                  <SelectItem value="Noida">Noida</SelectItem>
                  <SelectItem value="Kolkata">Kolkata</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Job Type Select */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
              <Select value={selectedJobType} onValueChange={setSelectedJobType}>
                <SelectTrigger className="pl-10 h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-gray-50">
                  <SelectValue placeholder="Job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="FullTime">Full Time</SelectItem>
                  <SelectItem value="PartTime">Part Time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>


        {/* Salary Range */}
        <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Salary Per Month</span>
              <span className="text-sm text-gray-900 font-medium">₹{salaryRange[0]}k - ₹{salaryRange[1]}k</span>
            </div>
            <div className="px-2">
              <Slider
                value={salaryRange}
                onValueChange={setSalaryRange}
                max={100}
                min={20}
                step={5}
                className="w-full"
              />
            </div>
        </div>
          </div>
        </div>

        {/* Jobs Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-purple-500 border-dashed rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading jobs...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more results</p>
              </div>
            )}
          </>
        )}
      </main>

      <CreateJobModal
        open={isCreateJobOpen}
        onClose={() => setIsCreateJobOpen(false)}
        onSubmit={handleCreateJob}
      />
    </div>
  );
}