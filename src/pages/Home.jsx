import React from 'react';
import CustomButton from '../component/CustomButton';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header className="App-header">
      <p>Halo ini halaman Utama</p>
      <Link to="/favorite">
        <a>Menuju Ke halaman kedua</a>
      </Link>
      <div>
        <CustomButton name="David Disini" variant={'contained'} />
      </div>
    </header>
  );
}
