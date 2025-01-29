admin and users have different jwts because if by chance the object id of admin and users is same(low probability) then he might have access to the admin endpoint so their passwords must be encoded with different JWTs so a user with same id cannot use user jwt to login to admin endpoint

Why Use Different JWTs for Admin and Users?
Separation of Roles:

Admins and users typically have different permissions and roles within an application. Using different JWTs helps enforce these roles effectively.
Risk Mitigation:

In an unfortunate scenario where an admin and a user might have the same Object ID (although unlikely), using different JWTs ensures that even if a user token is somehow compromised, they cannot access admin routes or perform admin actions.
Token Payload Security:

Each token can carry information relevant to the specific role. For example, the admin JWT can include claims about administrative privileges, while the user JWT can include basic user details. This specificity can help when determining access levels when a request is made.
Enhanced Security:

If the algorithms or secrets used to sign the JWTs differ, the tokens themselves become less vulnerable to being exploited. Even if a user token is compromised, an attacker won’t be able to generate a valid admin token.