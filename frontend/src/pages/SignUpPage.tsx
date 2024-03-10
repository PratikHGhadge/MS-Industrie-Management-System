import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { RegisterValidateYupSchema } from "../validations/validationSchemas.js";
import { RegisterCredentials } from "../validations/validationSchemas.js";
import CustomErrorMsg from "../components/common/CustomErrorMsg.js";
const roles = [
  { id: "admin", title: "Admin" },
  { id: "fieldsmen", title: "Field-man" },
  { id: "weight-checker", title: "weight-checker" },
];
const initialValues = { email: "", password: "", role: "" };
function SignupPage() {
  const onSubmit = async (values: RegisterCredentials) => {
    console.log(values);
  };
  return (
    <div className="bg-gray-100 h-screen p-4 sm:p-8 md:p-10 lg:p-20 2xl:p-20 ">
      <div className="flex flex-col md:flex-row md:min-h-[80vh] h-[44vh] bg-white md:rounded-2xl shadow-xl">
        {/* Help Section */}
        <div
          className="flex-grow  p-8 md:p-16 bg-img  bg-[url('./assets/bgphoto.jpg')] bg-cover md:rounded-l-2xl shadow-xl  "
        // style="background-image: url('./assets/bgphoto.jpg')"
        >
          <div className="flex flex-col space-y-4 text-white ">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <h1 className="text-5xl font-bold ">to Ms Industries</h1>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="flex-grow flex flex-col items-center justify-center p-8 md:p-16 ">
          <div className="flex flex-col space-y-4 mb-4   text-H1-text-color ">
            <h1 className="text-5xl font-bold">Register</h1>
            {/* <h1 className="text-5xl font-bold ">to Ms Industries</h1> */}
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={RegisterValidateYupSchema}
          >
            <Form
              className="space-y-4 w-full max-w-sm"
              action="#"
              method="POST"
            >
              <fieldset className="my-4 mb-4 ml-2">
                <legend className="sr-only">Role selection</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {roles.map((roles) => (
                    <div key={roles.id} className="flex items-center">
                      <Field
                        id={roles.id}
                        value={roles.id}
                        name="role"
                        type="radio"
                        className="focus:ring-black h-4 w-4 text-black border-gray-300"
                      />
                      <label
                        htmlFor={roles.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {roles.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 sm:text-sm"
                    placeholder="Email address"
                  />
                  <CustomErrorMsg name="email" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 sm:text-sm"
                    placeholder="Password"
                  />
                  <CustomErrorMsg name="password" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm-Password
                </label>
                <div className="mt-1">
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 sm:text-sm"
                    placeholder="Confirm-Password"
                  />
                  <CustomErrorMsg name="confirmPassword" />
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center border border-transparent bg-gradient-to-r from-orange-500 to-teal-300 rounded-md shadow-sm hover:bg-gradient-to-l px-8 py-3 text-base font-medium text-white hover:bg-custom-darkblue2 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2"
              >
                Register
              </button>
            </Form>
          </Formik>
          <Link
            to="/"
            className="font-medium text-custom-blue hover:text-custom-darkblue1"
          >
            <p className="mt-6 text-center text-bold text-H1-text-color">
              already have an account Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
