import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TopGamesForm({ onSubmit }) {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label>
                    Name
                    <input type='text' {...register("name")}/>
                </label>
                  <label>
                    Platform
                    <input type='text' {...register("platform")}/>
                </label>
                  <label>
                    Release Year
                    <input type='text' {...register("releaseYear")}/>
                </label>
            </fieldset>
            <button>Save</button>
        </form>
    )
}


