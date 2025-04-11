type GoodUSer={
    name: string;
    gift : string;
}

type BadUser={
    name : string;
    ip: string;
}

type users=GoodUSer | BadUser; // we can have eithet ggod or bad or both  but intersection should have everything

