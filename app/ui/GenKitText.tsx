'use client'
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { makeText } from "@/app/actions";
import { text } from "stream/consumers";


export default function GenKitText() {

    //get reference to textarea in react
    const [textAreaRef, setTextAreaRef] = useState('');
    return (
        <>
            <Button onClick={
                async () => {
                    const text = await makeText()
                    setTextAreaRef((t) => t + text)
                }
            }>
                Get Text
            </Button>
            <Textarea value={textAreaRef} readOnly />
        </>
    );
}
