import React, { useCallback, useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { auth, signInWithEmailAndPassword } from "@/api/firebase.config";
import { isEmpty } from "lodash";
import { useRouter } from "next/navigation";

const text = {
  userName: "Nom d'utilisateur",
  password: "Mot de passe",
  signIn: "Se Connecter",
  passwordSave: "Mémoriser cet appareil",
};
interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  setIsErrorText: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthLogin = ({ title, subtitle, subtext, setIsErrorText }: loginType) => {
  const [isUserRobot, setIsUserRobot] = useState(null);
  const router = useRouter();
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });
  const recaptchaRef = React.createRef();

  const onSignIn = useCallback(() => {
    setIsErrorText(false);
    const { email, password } = inputForm;
    
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          router.push("/");
          console.log({ userCredential });
        })
        .catch((_error) => setIsErrorText(true));
  }, [inputForm, router, setIsErrorText]);
  const isInpuNotEmpty =
    !isEmpty(inputForm.email) && !isEmpty(inputForm.password);
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Stack>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px"
          >
            {text.userName}
          </Typography>
          <CustomTextField
            variant="outlined"
            fullWidth
            onChange={(e) =>
              setInputForm({ ...inputForm, email: e.currentTarget.value })
            }
          />
        </Box>
        <Box mt="25px">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            {text.password}
          </Typography>
          <CustomTextField
            type="password"
            variant="outlined"
            fullWidth
            onChange={(e) =>
              setInputForm({ ...inputForm, password: e.currentTarget.value })
            }
          />
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={text.passwordSave}
            />
          </FormGroup>
        </Stack>
      </Stack>
      <Box>
        <Button
          color="info"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          onClick={onSignIn}
          disabled={!isInpuNotEmpty}
        >
          {text.signIn}
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthLogin;
