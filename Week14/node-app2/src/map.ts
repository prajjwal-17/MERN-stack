interface PersonInfo {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const personMap = new Map<string, PersonInfo>();
  
  // Add entries to the map using .set
  personMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  personMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(personMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
  