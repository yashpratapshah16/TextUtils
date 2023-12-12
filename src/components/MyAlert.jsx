import { Alert } from "@material-tailwind/react";

const MyAlert = (props) => {
  return (
    props.alert && (
      <Alert
        className=" w-2/4 absolute top-10 left-1/4"
        color={props.alert.color}
      >
        {props.alert.message}
      </Alert>
    )
  );
};

export default MyAlert;
