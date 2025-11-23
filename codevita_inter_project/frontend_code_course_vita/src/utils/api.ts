export const api = {
async get(url: string) {
return fetch(url).then((res) => res.json());
},
async post(url: string, data: any) {
return fetch(url, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data),
}).then((res) => res.json());
}
};