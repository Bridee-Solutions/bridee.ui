import React from 'react';

function SearchBar() {
  return (
    <form className="search-bar">
      <div className="search-inputs">
        <label htmlFor="search-input" className="visually-hidden">Pesquisar por nome ou categoria de serviço</label>
        <input
          id="search-input"
          type="text"
          className="search-input"
          placeholder="Pesquisar por nome ou categoria de serviço"
        />
        <div className="divider" />
        <label htmlFor="state-input" className="visually-hidden">Estado</label>
        <input
          id="state-input"
          type="text"
          className="state-input"
          placeholder="Estado"
        />
      </div>
      <button type="submit" className="search-button">Pesquisar</button>
      <style jsx>{`
        .search-bar {
          border-radius: 60px;
          background-color: #f2f2f2;
          align-self: center;
          display: flex;
          margin-top: 104px;
          width: 1288px;
          max-width: 100%;
          padding: 0 54px;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: space-between;
          font: 26px Montserrat, sans-serif;
          border: 1px solid #aaa;
        }
        .search-inputs {
          display: flex;
          align-items: center;
          gap: 40px 45px;
          color: #858585;
          font-weight: 400;
          flex-wrap: wrap;
          margin: auto 0;
        }
        .search-input, .state-input {
          background: transparent;
          border: none;
          font-size: 26px;
          color: #858585;
        }
        .divider {
          align-self: stretch;
          width: 1px;
          height: 62px;
          border: 1px solid #aaa;
        }
        .search-button {
          border-radius: 60px;
          background-color: #dd7b78;
          color: #fbf9f7;
          font-weight: 600;
          white-space: nowrap;
          padding: 33px 47px;
          border: 1px solid #aaa;
          cursor: pointer;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (max-width: 991px) {
          .search-bar {
            padding: 20px;
            margin-top: 40px;
          }
          .search-button {
            white-space: initial;
            padding: 20px;
          }
        }
      `}</style>
    </form>
  );
}

export default SearchBar;