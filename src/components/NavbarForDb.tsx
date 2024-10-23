import React from 'react';
import { IoCodeOutline } from 'react-icons/io5';
import { IoIosGitPullRequest } from 'react-icons/io';
import { AiOutlineBranches } from 'react-icons/ai';
import { LuDatabaseBackup } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function NavbarForDb(props: any) {
  return (
    <div className="flex items-center">
      <Link to={'/databases'}>
        <div className="flex ml-2 hover:border-b-blue-500 hover:border-b transition-all duration-200 pb-1 items-center">
          <IoCodeOutline size={18} />
          <h1 className="font-light font-mono ml-2">Console</h1>
        </div>
      </Link>
      <div className="flex ml-8 items-center hover:border-b-blue-500 hover:border-b transition-all duration-200 pb-1">
        <IoIosGitPullRequest size={18} />
        <h1 className="font-light font-mono ml-2">Deploy Request</h1>
      </div>
      <Link to={'/database/branches'}>
        <div className="flex ml-8 items-center hover:border-b-blue-500 hover:border-b transition-all duration-200 pb-1">
          <AiOutlineBranches size={18} />
          <h1 className="font-light ml-2 font-mono">Branches</h1>
        </div>
      </Link>
      <div className="flex ml-8 items-center hover:border-b-blue-500 hover:border-b transition-all duration-200 pb-1">
        <LuDatabaseBackup size={18} />
        <h1 className="font-light ml-2 font-mono">Backups</h1>
      </div>
    </div>
  );
}

export default NavbarForDb;
