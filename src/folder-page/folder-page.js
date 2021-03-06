import React from 'react';
import { NavLink } from 'react-router-dom';
//import Folder from '../folder/folder';
import './folder-page.css';

export default function FolderPage(props) {
    const {
        folder,
    } = props;

    return (
        <div>
            <div>
                <li key={folder.id} className={`folder-item ${props.highlight} ? 'folder-highlight' : ''`}>
                    <NavLink to={`/folders/${folder.id}`}>
                        <h3 className='folder-title'>{folder.name}</h3>
                    </NavLink>
                </li>
            </div>
        </div>
    )
}