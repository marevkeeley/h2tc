
const Home = () => {
  return (
    <body className="App-header" style={{backgroundColor: '#d3d3d3'}}>
      <div style={{backgroundColor: 'white', width: '30%', height:'auto', border: '2px solid black', top: '20%', left: '10%', position: 'absolute', padding: 10}}>
        <header style={{fontWeight: 'bold'}}>Why VT?</header>
        <p>
        Energy security and availability is critical for Virginia’s economic development. 
        Clean energy is vital for our planet. VT is uniquely positioned to inspire and equip a 
        generation of citizens who can take on the technical and social challenges of transitioning 
        to a clean energy future for Virginia. 
        </p>
      </div>
      <div style={{backgroundColor: 'white', width: '30%', height:'auto', border: '2px solid black', top: '20%', left: '56%', position: 'absolute', padding: 10}}>
        <header style={{fontWeight: 'bold'}}><a href="/govirginia" style={{textDecoration: 'none'}}>GoVirginia Charter</a></header>
        <ul>
          <li>Develop 4-6 Use Cases for Green H2</li>
          <li>Design, build and sustain the H2TC</li> 
            <ul>
              <li>Dashboard</li>
              <li>Current Action Items</li>
            </ul>
          <li>Develop a workforce certification program</li>
        </ul>
      </div>
      <div style={{backgroundColor: 'white', width: '22%', height:'auto', border: '2px solid black', top: '60%', left: '10%', position: 'absolute', padding: 10}}>
        <header style={{fontWeight: 'bold'}}><a href="/h2hub" style={{textDecoration: 'none'}}>H2 Hub Project</a></header>
        <ul>
          <li>Financials</li>
          <li>Proposal</li>
          <li><a href='https://docs.google.com/spreadsheets/d/1v6aOZfqOBMFHpp8F3c-rCi136W0RsfsdUEgPgCa3GXc/edit#gid=0'>Go Fast Plan</a></li>
        </ul>
      </div>
      <div style={{backgroundColor: 'white', width: '10%', height:'auto', border: '2px solid black', top: '60%', left: '45%', position: 'absolute', padding: 10}}>
        <header style={{fontWeight: 'bold'}}>Project Plans</header>
        <div style={{padding: 40}}/>
      </div>
      <div style={{top: '60%', left: '67%', border: '2px solid black', position: 'absolute'}}>
        <a href="/research"><img src={require('../assets/research.png')} alt="Research think tank" style={{marginBottom: -4}}/></a>
      </div>
    </body>
  );
};

export default Home;