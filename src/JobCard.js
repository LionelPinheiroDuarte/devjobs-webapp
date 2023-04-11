export function JobCard({id, company, contract, location, position}) {

  return (
    <li key={id}>
      <h2>name: {company}</h2>
      <h2>lastname: {contract}</h2>
      <h2>{position}</h2>
      <h2>{location}</h2>
    </li>
  );
}