export default function Overlay({ inside, setInside }) {
  return (
    <>
      <header>
        <img draggable={false} width="100%" src="/eid_mubarak.svg" />
      </header>
      <footer className="footer">
        <button
          className="button--explore"
          onClick={() => {
            setInside(!inside);
          }}
        >
          ZOOM IN - TO LOOK INSIDE
        </button>
        <br />
        Created with love by Md Amik. Using LumaAI for the outside Gaussian
        Splatting and BlockadeLabs for internal snow globe.
      </footer>
    </>
  );
}
