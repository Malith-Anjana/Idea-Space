"use client";

import React, {useState} from 'react'
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import MDEditor from '@uiw/react-md-editor';
import {Button} from "@/components/ui/button";
import {Send} from "lucide-react";

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = React.useState();
    const isPending = false;

    return (
        <form action={() => {
        }} className="startup-form">
            <div>
                <label className="startup-form_label" htmlFor="title">
                    Title
                </label>
                <Input
                    id="title"
                    name="title"
                    placeholder="Startup Title"
                    required
                    className="startup-form_input"
                />
                {errors.title && <p className="startup-form_error">
                    {errors.title}
                </p>}
            </div>
            <div>
                <label className="startup-form_label" htmlFor="description">
                    Description
                </label>
                <Textarea
                    id="description"
                    name="description"
                    placeholder="Startup Description"
                    required
                    className="startup-form_textarea"
                />
                {errors.description && <p className="startup-form_error">
                    {errors.description}
                </p>}
            </div>
            <div>
                <label className="startup-form_label" htmlFor="title">
                    Category
                </label>
                <Input
                    id="category"
                    name="category"
                    placeholder="Startup Category (Teach, Health, Eduction)"
                    required
                    className="startup-form_input"
                />
                {errors.category && <p className="startup-form_error">
                    {errors.category}
                </p>}
            </div>
            <div>
                <label className="startup-form_label" htmlFor="link">
                    Image URL
                </label>
                <Input
                    id="link"
                    name="link"
                    placeholder="Startup Image URL"
                    required
                    className="startup-form_input"
                />
                {errors.link && <p className="startup-form_error">
                    {errors.link}
                </p>}
            </div>
            <div data-color-mode="light">
                <label className="startup-form_label" htmlFor="picth">
                    Pitch
                </label>
                <MDEditor
                    value={pitch}
                    onChange={(value)=>setPitch(value as string)}
                    id="picth"
                    preview="edit"
                    height={300}
                    style={{borderRadius: 20, overflow: 'hidden', borderWidth:3, borderColor:'black'}}
                    textareaProps={{
                        placeholder: "Briefly describe your idea and what problem it solves"
                    }}
                    previewOptions={{
                        disallowedElements: ["style"]
                    }}
                />

                {errors.pitch && <p className="startup-form_error">
                    {errors.pitch}
                </p>}
            </div>
            <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit Your Pitch"}
                <Send className="size-6 ml-2"/>
            </Button>
        </form>
    )
}
export default StartupForm
