import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Simple React App</p>
    </footer>
  );
}