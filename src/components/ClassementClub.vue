<template>
    <div>
        <h1>Classement des clubs</h1>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Logo</th>
                    <th>Club</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="club in classement" :key="club">
                    <td>{{ index + 1 }}</td>
                    <td><img :src="club.image" alt="Logo" /></td>
                    <td>{{ club.nom }}</td>
                    <td>{{ club.points_attribues }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            classement: []
        };
    },
    mounted() {
        this.fetchClassement();
    },
    methods: {
        fetchClassement() {
            fetch('http://localhost:3000/classement') // Remplacez par votre URL de l'API
                .then(response => response.json())
                .then(data => {
                    this.classement = data;
                })
                .catch(error => console.error('Erreur:', error));
        }
    }
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

thead {
  background-color: #f2f2f2;
}
</style>
