const TUNNEL_SIZE = 3;
const COMPARTMENTS = ["a","b","c","d","e","f"];

function createTrain(compartments) {
  const trainElement = document.getElementById("train");
  const compartmentElements = createContainerElements(compartments);

  compartmentElements.forEach(element => {
    trainElement.appendChild(element);
  });
}

function createContainerElements(containerValues) {
  const containerElements = [];

  containerValues.forEach(item => {
    let containerElement = createSpan(item);
    containerElements.push(containerElement);
  });

  return containerElements;
    
}

function createTunnel(size) {
  const tunnelElement = document.getElementById("tunnel");
  const initialTunnelValues = [];

  for(let i =0; i<size; i++) {
    initialTunnelValues.push(" ");
  }

  const compartmentElements = createContainerElements(initialTunnelValues);

  compartmentElements.forEach(element => {
    tunnelElement.appendChild(element);
  });
}

function enterIntoTunnel() {
  // fetch train elements
  const trainElement = document.getElementById("train");
  const compartmentElements = Array.from(trainElement.children);

  // fetch the tunnel & its elements
  const tunnelElement = document.getElementById("tunnel");
  const tunnelChildren = Array.from(tunnelElement.children);

  /*  if compartmentElements is 0:
        and if there are still elements in the tunnel:
        then shift them (remove the last element) AND
        insert a blank element " "
      
    
        but if there are no elements in the tunnel (blank element in the beginning), then:
          createTunnel() again

      else:
        do whatever you did earlier (insert normally)

  */

  if (compartmentElements.length === 0) {
    // remove last element from tunnel
    let lastTunnelElement = tunnelChildren.pop();
    tunnelElement.removeChild(lastTunnelElement);

    /* if the last element removed from the tunnel is " ", then it means that our train has finally completely left the tunnel
      only in that case, make the train enter the tunnel once again

      if not, then insert a blank element into the beginning of the tunnel
    */

    if (lastTunnelElement.innerHTML === " ") {
      createTrain(COMPARTMENTS);
    }
    // insert blank element into tunnel
    let blankElement = createSpan();
    tunnelElement.insertBefore(blankElement, tunnelElement.children[0]);
  } else {
    // fetch the last compartment
    const lastCompartment = compartmentElements.pop();
    // remove it from the train elements
    trainElement.removeChild(lastCompartment);

    // remove last element from tunnel
    let lastTunnelElement = tunnelChildren.pop();
    tunnelElement.removeChild(lastTunnelElement);

    // insert train element into tunnel
    tunnelElement.insertBefore(lastCompartment, tunnelElement.children[0]);
  }
  
}

// helper method to create an element
function createSpan(value) {
  const span = document.createElement("span");
  span.innerHTML = value ? value : " ";
  return span;
}


// First, create/initialize the train;
createTrain(COMPARTMENTS);

//next, create the tunnel
createTunnel(TUNNEL_SIZE);