type GoodUSer={
    name: string;
    gift : string;
}

type BadUser={
    name : string;
    ip: string;
}

type users=GoodUSer | BadUser; // we can have eithet ggod or bad or both  but intersection should have everything

const guy: users={
    name: "Prajjwal",
    ip:"3r32rf",
    gift: "!214344"
};
/*
👉 Since it satisfies both GoodUSer and BadUser, it's still valid for the union GoodUSer | BadUser.
A union means "at least one of these types", and if an object satisfies both, that's still fine.

In TypeScript, a union doesn’t restrict you to only one of the types — it just says the object must 
be assignable to at least one. And if it's assignable to both, even better.
*/