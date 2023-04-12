export function JobCard({ company, contract, location, position}) {

  return (
    <div >
      <h2>name: {company}</h2>
      <h2>lastname: {contract}</h2>
      <h2>{position}</h2>
      <h2>{location}</h2>
    </div>
  );
}