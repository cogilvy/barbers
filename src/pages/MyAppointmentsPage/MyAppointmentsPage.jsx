import * as userService from '../../utilities/users-service';

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>My Appointments</h1>
    </>
  );
} 