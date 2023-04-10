import useSWR from 'swr';
import { JobCard } from './JobCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function JobBoard() {

  const { data, error } = useSWR('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;
 
  const jobs = JSON.parse(data);

  return (
    <ul>
      {jobs.map(({id, first_name, last_name}) => {
        return (
          <JobCard name={first_name} last_name={last_name}/>
        );
      })}
  </ul>
  );
}