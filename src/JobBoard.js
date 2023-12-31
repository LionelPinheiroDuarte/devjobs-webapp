import useSWR from 'swr';
import { useRouter } from 'next/router'
import Link from 'next/link'

import { JobCard } from './JobCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  return <p>{id}</p>
}


export function JobBoard() {

  const { data, error } = useSWR('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;
 
  const jobs = JSON.parse(data);

  return (
    <ul>
      {jobs.map(({id, company, contract, location, position}) => {
        return (
          <li key={id}>
            <Link href={`/offer/${id}`}>
              <JobCard company={company} contract={contract} location={location} postion={position} />
            </Link>
          </li>
        );
      })}
  </ul>
  );
}