import React, { useState } from 'react';
import styled from 'styled-components';
import Table from '../ui/Table';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

const ParticipantsTitle = styled.h2`
  margin-bottom: 1rem;
`;

const StyledTable = styled(Table)`
  width: 100%;
  margin-bottom: 1rem;
`;

const FormContainer = styled.div`
  margin-bottom: 1rem;
`;

const Participants = ({ participants, setParticipants, approvalChecked  }) => {
  const colWidths = ['auto', '30%', 'auto', 'auto', 'auto', 'auto'];

  
  const [showForm, setShowForm] = useState(false);
  const [newParticipant, setNewParticipant] = useState({
    name: '',
    email: '',
    phone: '',
    htp: '',
    responsibility: ''
  });
  const [editedParticipant, setEditedParticipant] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewParticipant((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setParticipants((prevState) => [...prevState, newParticipant]);
    setNewParticipant({
      name: '',
      email: '',
      phone: '',
      htp: '',
      responsibility: ''
    });
    setShowForm(false);
  };

  const handleEditClick = (event, participant) => {
    event.preventDefault();
    setEditedParticipant(participant);
  };

  const handleEditSubmit = (event, participant) => {
    event.preventDefault();
    setParticipants((prevState) =>
      prevState.map((p) => (p.id === participant.id ? participant : p))
    );
    setEditedParticipant(null);
  };

  return (
    <div>
<ParticipantsTitle>Osallistujat</ParticipantsTitle>      
<StyledTable colWidths={colWidths}>
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Sähköposti</th>
            <th>Matkapuhelinnumero</th>
            <th>Htp</th>
            <th>Vastuu</th>
            <th>Muokkaa</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant) => (
            <tr key={participant.id}>
              <td>{participant.name}</td>
              <td>{participant.email}</td>
              <td>{participant.phone}</td>
              <td>{participant.htp}</td>
              <td>{participant.responsibility}</td>
              <td>
              {!editedParticipant || editedParticipant.id !== participant.id ? (
                  <Button onClick={(event) => handleEditClick(event, participant)} disabled={approvalChecked}>
                    Muokkaa
                  </Button>
                ) : (
                  <form onSubmit={(event) => handleEditSubmit(event, editedParticipant)}>
              <TextInput
                label="Nimi:"
                id="name"
                name="name"
                value={editedParticipant.name}
                onChange={(event) =>
                  setEditedParticipant((prevState) => ({
                    ...prevState,
                    name: event.target.value
                  }))
                }
              />
              <TextInput
                label="Sähköposti:"
                type="email"
                id="email"
                name="email"
                value={editedParticipant.email}
                onChange={(event) =>
                  setEditedParticipant((prevState) => ({
                    ...prevState,
                    email: event.target.value
                  }))
                }
              />
              <TextInput
                label="Matkapuhelinnumero:"
                id="phone"
                name="phone"
                value={editedParticipant.phone}
                onChange={(event) =>
                  setEditedParticipant((prevState) => ({
                    ...prevState,
                    phone: event.target.value
                  }))
                }
              />
              <TextInput
                label="Htp:"
                id="htp"
                name="htp"
                value={editedParticipant.htp}
                onChange={(event) =>
                  setEditedParticipant((prevState) => ({
                    ...prevState,
                    htp: event.target.value
                  }))
                }
              />
              <TextInput
                label="Vastuu:"
                id="responsibility"
                name="responsibility"
                value={editedParticipant.responsibility}
                onChange={(event) =>
                  setEditedParticipant((prevState) => ({
                    ...prevState,
                    responsibility: event.target.value
                  }))
                }
              />
              <Button type="submit">Tallenna</Button>
              <Button onClick={() => setEditedParticipant(null)}>Peruuta</Button>
            </form>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        </StyledTable>
        {!showForm && (
        <Button onClick={() => setShowForm(true)} disabled={approvalChecked}>
          Lisää osallistuja
        </Button>
      )}
      {showForm && (
        <FormContainer>
          <form onSubmit={handleSubmit}>
            {/* ... replace existing input elements with TextInput components ... */}
            <TextInput
              label="Nimi:"
              id="name"
              name="name"
              value={newParticipant.name}
              onChange={handleInputChange}
            />
            <TextInput
              label="Sähköposti:"
              type="email"
              id="email"
              name="email"
              value={newParticipant.email}
              onChange={handleInputChange}
            />
            <TextInput
              label="Matkapuhelinnumero:"
              id="phone"
              name="phone"
              value={newParticipant.phone}
              onChange={handleInputChange}
            />
            <TextInput
              label="Htp:"
              id="htp"
              name="htp"
              value={newParticipant.htp}
              onChange={handleInputChange}
            />
            <TextInput
              label="Vastuu:"
              id="responsibility"
              name="responsibility"
              value={newParticipant.responsibility}
              onChange={handleInputChange}
            />
            <Button type="submit">Tallenna</Button>
          </form>
        </FormContainer>
      )}
    </div>
  );
};

export default Participants;
