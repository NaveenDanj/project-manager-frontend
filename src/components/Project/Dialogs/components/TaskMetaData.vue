<template>
  <div class="pa-0">
    <table
      border="1"
      style="width: 100%; border-collapse: collapse; border-radius: 5px"
    >
      <tbody>
        <tr>
          <td class="pa-1">
            <v-icon class="ml-1 mr-1">mdi-comment</v-icon>
            <label style="font-weight: bold">Comments</label>
          </td>
          <td class="pa-1">
            <textarea
              style="width: 100%; border: 1px solid black; padding-left: 5px"
              type="text"
              rows="1"
            ></textarea>
          </td>
        </tr>

        <tr>
          <td>
            <v-icon class="ml-1 mr-1">mdi-heart-remove</v-icon>
            <label style="font-weight: bold">Risk</label>
          </td>

          <td class="pa-1">
            <select
              style="width: 100%; border: 1px solid black; padding-left: 5px"
            >
              <option>Very Likely</option>
              <option>Likely</option>
              <option>At Risk</option>
              <option>High Risk</option>
              <option>Low Risk</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <v-icon class="ml-1 mr-1"> mdi-flag-checkered </v-icon>
            <label style="font-weight: bold">Sprint Goal</label>
          </td>

          <td class="pa-1">
            <select
              style="width: 100%; border: 1px solid black; padding-left: 5px"
            >
              <option>Goal 1</option>
              <option>Goal 2</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <v-icon class="ml-1 mr-1"> mdi-clipboard-text-clock</v-icon>
            <label style="font-weight: bold">Due Date</label>
          </td>

          <td class="pa-1">
            <input
              type="date"
              style="width: 100%; border: 1px solid black; padding-left: 5px"
            />
          </td>
        </tr>

        <tr>
          <td>
            <v-icon class="ml-1 mr-1">mdi-attachment</v-icon>
            <label style="font-weight: bold">Attachment</label>
          </td>

          <td class="pa-1 d-flex" >
            <input
              type="file"
              multiple
            />
            <a class="my-auto ml-1" href="#">Open</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>