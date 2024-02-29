import { BaseProps } from "../types";
import { FormEvent } from "react";
import { User } from "../data/data";
import React from "react";
import { useRef } from "react";


type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};


export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const checkboxRef = React.useRef<HTMLInputElement>(null);
    const emailRef = React.useRef<HTMLInputElement>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: User = {
      id: Math.floor(Math.random() * 1000),
      name: inputRef.current?.value || "",
      email: emailRef.current?.value || "",
      isActive: checkboxRef.current?.checked || false,
    };
    //Read form inputs and submit the form to the parent
    onSubmitUser(newUser);
  };


  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name: <input name="name" ref={inputRef} />
        Email: <input name="email" ref={emailRef} />
        Active: <input type="checkbox" name="isActive" ref={checkboxRef} />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
