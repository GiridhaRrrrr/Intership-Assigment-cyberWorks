"use client";

import { Diamond, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { CreateJobModal } from '@/components/create-job-modal';

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

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Full Stack Developer',
    company: 'Amazon',
    location: 'Chennai',
    type: 'FullTime',
    experience: '2+ Yr Exp',
    salary: '₹50K - ₹80K',
    isRemote: true,
    postedAgo: '24h Ago',
    description: 'A user-friendly interface lets you browse stunning photos and videos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    id: '2',
    title: 'Node.js Developer',
    company: 'Tesla',
    location: 'Delhi',
    type: 'FullTime',
    experience: '1-3 Yr Exp',
    salary: '₹60K - ₹90K',
    isRemote: true,
    postedAgo: '24h Ago',
    description: 'A user-friendly interface lets you browse stunning photos and videos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg'
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Firefox',
    location: 'Mumbai',
    type: 'Contract',
    experience: '1-3 Yr Exp',
    salary: '₹40K - ₹70K',
    isRemote: false,
    postedAgo: '24h Ago',
    description: 'A user-friendly interface lets you browse stunning photos and videos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg'
  },
  {
    id: '4',
    title: 'Full Stack Developer',
    company: 'Amazon',
    location: 'Bangalore',
    type: 'FullTime',
    experience: '3+ Yr Exp',
    salary: '₹70K - ₹100K',
    isRemote: true,
    postedAgo: '24h Ago',
    description: 'A user-friendly interface lets you browse stunning photos and videos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    id: '5',
    title: 'Node.js Developer',
    company: 'Tesla',
    location: 'Hyderabad',
    type: 'PartTime',
    experience: '1-3 Yr Exp',
    salary: '₹45K - ₹75K',
    isRemote: true,
    postedAgo: '24h Ago',
    description: 'A user-friendly interface lets you browse stunning photos and videos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg'
  },
  {
    id: '6',
    title: 'UX/UI Designer',
    company: 'Firefox',
    location: 'Pune',
    type: 'Internship',
    experience: '0-1 Yr Exp',
    salary: '₹25K - ₹45K',
    isRemote: false,
    postedAgo: '24h Ago',
    description: 'A user-friendly interface lets you browse stunning photos and videos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg'
  },
  {
    id: '7',
    title: 'Full Stack Developer',
    company: 'Amazon',
    location: 'Noida',
    type: 'Contract',
    experience: '2+ Yr Exp',
    salary: '₹55K - ₹85K',
    isRemote: true,
    postedAgo: '24h Ago',
    description: 'A user-friendly interface lets you browse stunning photos and videos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    id: '8',
    title: 'Node.js Developer',
    company: 'Tesla',
    location: 'Kolkata',
    type: 'FullTime',
    experience: '1-3 Yr Exp',
    salary: '₹50K - ₹80K',
    isRemote: true,
    postedAgo: '24h Ago',
    description: 'A user-friendly interface lets you browse stunning photos and videos.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg'
  }
];


export function Header() {
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [jobs, setJobs] = useState<Job[]>(mockJobs);


  const handleCreateJob = (jobData: any) => {
    const newJob: Job = {
      id: Date.now().toString(),
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
    setJobs([newJob, ...jobs]);
    setIsCreateJobOpen(false);
  };
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Diamond className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">JobPortal</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Find Jobs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Find Talents</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Testimonials</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden md:flex text-gray-600 hover:text-gray-900"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button 
              onClick={() => setIsCreateJobOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Create Job              
            </Button>
          </div>
        </div>
      </div>
      <CreateJobModal 
        open={isCreateJobOpen} 
        onClose={() => setIsCreateJobOpen(false)}
        onSubmit={handleCreateJob}
      />
    </header>
  );
}