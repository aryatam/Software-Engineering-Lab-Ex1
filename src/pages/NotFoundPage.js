import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section>
      <h2>404 Not Found</h2>
      <p>Sorry, page doesn’t exist. Go <Link to="/">home</Link>.</p>
    </section>
  );
}