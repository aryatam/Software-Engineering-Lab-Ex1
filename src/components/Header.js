// src/components/Header.js
import React from 'react';

export default function Header({ title }) {
    return (
        <header className="app-header">
            <h1>{title}</h1>
        </header>
    );
}
