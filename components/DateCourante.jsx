// components/DateCourante.jsx
'use client';
import { useEffect, useState } from 'react';

export default function DateCourante() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('fr-CA', options);
    setDate(today);
  }, []);

  return (
    <p className="text-3xl mb-2">
      Nous sommes le <b>{date}</b>
    </p>
  );
}
