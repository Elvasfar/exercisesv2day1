
type ProfileProps = {
    name: string;
    email: string;
    isActive: boolean;
    singleLine: boolean;
  };
  
  export default function Profile({ name, email, isActive, singleLine }: ProfileProps) {
    {if(singleLine) 
        return(
            <p>Name: {name} Email: {email} Status: {isActive ? "Active" : "Inactive"}</p>
        )}
    return (
      <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Status: {isActive ? "Active" : "Inactive"}</p>
        
      </>
    );
  
}

