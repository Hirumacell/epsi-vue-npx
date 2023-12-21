<template>
    <div>
        <h1>Classement des clubs</h1>
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Club ID</th>
                    <th>Saison ID</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="club in classement" :key="club">
                    <td>{{ club.position}}</td>
                    <td>{{ club.club_id }}</td>
                    <td>{{ club.saison_id }}</td>
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
