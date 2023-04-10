export function JobCard({id, name, last_name}) {

  return (
    <li key={id}>
      <h2>name: {name}</h2>
      <h2>lastname: {last_name}</h2>
    </li>
  );
}