import { google } from 'googleapis';

export async function getServerSideProps({ query }) {

    //Auth
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});

    const sheets = google.sheets({version: 'v4', auth});

    //Query
    const {id} = query;
    const range = `Sheet1!A${id}:C${id}`;
    const response = await sheets.spreaddheets.values.get({
        spreaddheetId: process.env.SHEET_ID,
        range,
    });

    //Result
    const [user, password] = response.data.values[0];

    return {
        props: {
            user,
            password
        }
    }
}

export default function Post({ user, password}){
    return <article>
        <h1>{user}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
    </article>
}