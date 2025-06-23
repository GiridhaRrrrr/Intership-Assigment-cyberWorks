import { databases, ID } from '../appwrite/config'; // Adjust path as needed

const DB_ID = '6859032900307d7309b5';
const COLLECTION_ID = '68590faa0034d0c86c7b';

const mockJobs = [
    {
      title: 'Node.js Developer',
      company: 'Tesla',
      location: 'Delhi',
      type: 'FullTime',
      experience: '1-3 Yr Exp',
      salary: '60000 - 90000',
      isRemote: true,
      postedAgo: '24h Ago',
      description: 'A user-friendly interface lets you browse stunning photos and videos.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg'
    },
    {
      title: 'UX/UI Designer',
      company: 'Firefox',
      location: 'Mumbai',
      type: 'Contract',
      experience: '1-3 Yr Exp',
      salary: '40000 - 70000',
      isRemote: false,
      postedAgo: '24h Ago',
      description: 'A user-friendly interface lets you browse stunning photos and videos.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg'
    },
    {
      title: 'Full Stack Developer',
      company: 'Amazon',
      location: 'Bangalore',
      type: 'FullTime',
      experience: '3+ Yr Exp',
      salary: '70000 - 100000',
      isRemote: true,
      postedAgo: '24h Ago',
      description: 'A user-friendly interface lets you browse stunning photos and videos.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    {
      title: 'Node.js Developer',
      company: 'Tesla',
      location: 'Hyderabad',
      type: 'PartTime',
      experience: '1-3 Yr Exp',
      salary: '45000 - 75000',
      isRemote: true,
      postedAgo: '24h Ago',
      description: 'A user-friendly interface lets you browse stunning photos and videos.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg'
    },
    {
      title: 'UX/UI Designer',
      company: 'Firefox',
      location: 'Pune',
      type: 'Internship',
      experience: '0-1 Yr Exp',
      salary: '25000 - 45000',
      isRemote: false,
      postedAgo: '24h Ago',
      description: 'A user-friendly interface lets you browse stunning photos and videos.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg'
    },
    {
      title: 'Full Stack Developer',
      company: 'Amazon',
      location: 'Noida',
      type: 'Contract',
      experience: '2+ Yr Exp',
      salary: '55000 - 85000',
      isRemote: true,
      postedAgo: '24h Ago',
      description: 'A user-friendly interface lets you browse stunning photos and videos.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    {
      title: 'Node.js Developer',
      company: 'Tesla',
      location: 'Kolkata',
      type: 'FullTime',
      experience: '1-3 Yr Exp',
      salary: '50000 - 80000',
      isRemote: true,
      postedAgo: '24h Ago',
      description: 'A user-friendly interface lets you browse stunning photos and videos.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg'
    }
  ];

const seedJobs = async () => {
  for (const job of mockJobs) {
    try {
      const created = await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), job);
      console.log(`✅ Inserted: ${created.title} at ${created.company}`);
    } catch (error) {
      console.error(`❌ Error inserting ${job.title}:`, error);
    }
  }
};

seedJobs();
