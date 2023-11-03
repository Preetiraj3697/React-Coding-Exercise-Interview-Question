/**
  Challenge: Display all users to the browser
  Small Hint: Use array map with react key
  
  Solution: https://codepen.io/angelo_jin/pen/wvreMpZ
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];
const userList = users.map((user)=> <li key={user.id}>{user.name}</li>);

const DisplayUsers = () => {
    return (
    <>
      <h3>User names</h3>
      <ul>{userList}</ul>
    </>
    )
}
export default DisplayUsers;