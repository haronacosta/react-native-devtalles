//import { BasicTypes } from "./typescript/BasicTypes"
//import { ObjectLiterals } from "./typescript/ObjectLiterals";
//import { BasicFunctions } from "./typescript/BasicFunctions";
//import Counter from "./components/Counter";
//import { LoginPage } from "./components/LoginPage";

import UserPage from "./components/UserPage";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-3xl font-bold mb-5">Hello world!</h1>

        {/* <BasicTypes /> */}
        {/*  <ObjectLiterals /> */}
        {/*  <BasicFunctions /> */}
        {/* <Counter /> */}
       {/*  <LoginPage /> */}

       <UserPage />
      </div>
    </>
  );
}

export default App;
