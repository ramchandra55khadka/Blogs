import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "Balen Shah", following: true },
  { name: "Kp Sharma Oli", following: false },
  { name: "Sabitra Khadka", following: true },
  { name: "Joe Biden", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">People To Follow</h3>
      <div className="space-y-4">
        {peopleToFollow.map((person) => (
          <UserCard key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
