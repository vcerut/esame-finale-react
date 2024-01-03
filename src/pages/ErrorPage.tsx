const ErrorPage = () => {
  return (
    <>
      <div className='mx-4 md:mx-24'>
        <h1 className='mb-4 uppercase italic font-semibold'>uh oh!</h1>
        <p>
          Lost in the neon lights, huh? It seems like this page is off catching
          its own vibe. Take a breather, grab a virtual cocktail, and boogie
          your way back to the main scene. Our beats are still dropping
          elsewhere on the site.
        </p>
        <a
          href='/'
          className='text-[#9E1946] hover:text-[#f35b8e] transition ease-in-out delay-150'
        >
          Let's hustle back to where the party's poppin'
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
