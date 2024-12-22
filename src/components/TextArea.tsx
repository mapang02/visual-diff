import { JSX } from "preact";

interface TextAreaProps extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
    extraProp?: string;
}

export default function TextArea(props: TextAreaProps) {
    // Set default properties in CSS class
    
    return <textarea {...props}></textarea>
}