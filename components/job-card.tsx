"use client";

import { MapPin, Clock, Briefcase, DollarSign, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'FullTime':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'PartTime':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Contract':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Internship':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCompanyLogo = (company: string) => {
    // Company initial in a colored circle
    const colors = {
      'Amazon': 'bg-yellow-500',
      'Tesla': 'bg-red-500',
      'Firefox': 'bg-orange-500',
      'Google': 'bg-blue-500',
      'Microsoft': 'bg-blue-600',
      'Apple': 'bg-gray-800'
    };
    
    const bgColor = colors[company as keyof typeof colors] || 'bg-gray-500';
    
    return (
      <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
        {company.charAt(0)}
      </div>
    );
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-300 rounded-2xl overflow-hidden bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {getCompanyLogo(job.company)}
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">
                {job.title}
              </h3>
              <p className="text-gray-600 text-sm">{job.company}</p>
            </div>
          </div>
          <Badge className="bg-blue-50 text-blue-600 border-blue-200 text-xs font-medium px-2 py-1">
            {job.postedAgo}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Job Details */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span>{job.location}</span>
            {job.isRemote && (
              <Badge variant="secondary" className="ml-2 text-xs">
                <Globe className="h-3 w-3 mr-1" />
                Remote
              </Badge>
            )}
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
            <span>{job.experience}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
            <span className="font-medium text-gray-900">{job.salary}</span>
          </div>
        </div>

        {/* Job Type Badge */}
        <Badge className={`${getJobTypeColor(job.type)} font-medium`}>
          {job.type === 'FullTime' ? 'Full Time' : 
           job.type === 'PartTime' ? 'Part Time' : 
           job.type}
        </Badge>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {job.description}
        </p>

        {/* Apply Button */}
        <Button 
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
}