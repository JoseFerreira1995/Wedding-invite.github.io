interface PropTypes {
  title: string;
  description: string;
  img?: never;
}

export default function Card(props: PropTypes) {
  return (
    <div className="text-center space-y-5 m-2 p-1 font-open text-orange-300" >
      <h1>{props.title}</h1>
      <h2> {props.description}</h2>
    </div>
  );
}
