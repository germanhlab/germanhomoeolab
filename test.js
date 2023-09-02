"use client"

import { createContext, useContext, useState, useEffect } from "react";

const SignOutt = () => {
    console.log('signOut ...');
};

export default function useFirebaseAuth() {

    const SignOut = () => {
        console.log('signOut ...');
    };

    return {
        SignOut,
    };
}