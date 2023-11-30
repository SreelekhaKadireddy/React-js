import React from "react";
import Useeffect_ex from "./hooks/useeffect";
import Usestate_ex from "./hooks/usestate";
import ReistrationForm from "./hooks/useref";
import Factorial from "./hooks/usememo";
export default function App(){
  return(
    <>
    <Usestate_ex/>
    <hr/>
    <Useeffect_ex/>
    <hr/>
    <ReistrationForm />
    <hr/>
    <Factorial/>
    </>
  )
}