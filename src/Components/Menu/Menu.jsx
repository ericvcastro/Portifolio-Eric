import React, { useState } from 'react';
import './Menu.css';

import { Button, Tooltip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FilterListIcon from '@mui/icons-material/FilterList';
import FaceIcon from '@mui/icons-material/Face';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ContactsIcon from '@mui/icons-material/Contacts';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';

const Menu = () => {
  const [layoutOpen, setLayoutOpen] = useState(true);
  const [bottomLayoutOpen, setBottomLayoutOpen] = useState('Abrir Menu');

  const OpenCloseMenu = () => {
    setLayoutOpen(!layoutOpen);
    if (layoutOpen) setBottomLayoutOpen('Abrir Menu');
    else setBottomLayoutOpen('Fechar Menu');
  }

  return (
    <>
      <div className="menuWitdh">
        <div className="iconPosition">
          <Tooltip title={bottomLayoutOpen} placement="right" arrow>
            <Button onClick={OpenCloseMenu}>
              <FilterListIcon fontSize="large" color="action" />
            </Button>
          </Tooltip>
        </div>
      </div>
      {layoutOpen && (
        <div className="menuBottons">
          <div className="iconPosition">
            <Tooltip title="Sobre mim" placement="right" arrow>
              <Button>
                <FaceIcon fontSize="large" color="action" />
              </Button>
            </Tooltip>
          </div>
          <div className="iconPosition">
            <Tooltip title="Conhecimentos" placement="right" arrow>
              <Button>
                <PsychologyIcon fontSize="large" color="action" />
              </Button>
            </Tooltip>
          </div>
          <div className="iconPosition">
            <Tooltip title="Projetos e Conquistas" placement="right" arrow>
              <Button>
                <EmojiEventsIcon fontSize="large" color="action" />
              </Button>
            </Tooltip>
          </div>
          <div className="iconPosition">
            <Tooltip title="Mercado de Trabalho" placement="right" arrow>
              <Button>
                <WorkTwoToneIcon fontSize="large" color="action" />
              </Button>
            </Tooltip>
          </div>
          <div className="iconPosition">
            <Tooltip title="Contatos" placement="right" arrow>
              <Button>
                <ContactsIcon fontSize="large" color="action" />
              </Button>
            </Tooltip>
          </div>
        </div>
      )
      }
    </>
  );

}

export default Menu;