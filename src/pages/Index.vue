<template>
  <q-layout view="hHr Lpr lFf">
    <!-- 页眉 -->
<!--
    <q-layout-header>
      <q-toolbar>
        <q-btn flat round dense @click="showLeft = !showLeft" icon="menu" />
        <q-toolbar-title>
          Layout Header
        </q-toolbar-title>
        <q-btn flat round dense @click="showRight = !showRight" icon="menu" />
      </q-toolbar>
      <q-tabs>
        <q-route-tab icon="view_quilt" to="/test-layout/about" replace hide="icon" label="关于" />
        <q-route-tab icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="工具栏" />
        <q-route-tab icon="view_day" to="/test-layout/tabs" replace label="Tab栏" />
        <q-route-tab icon="input" to="/test-layout/drawer" replace label="侧滑栏" />
      </q-tabs>
    </q-layout-header>
-->
    <!-- 左侧侧滑面板 -->
<!--
    <q-layout-drawer side="left" v-model="showLeft">
      <q-list no-border link inset-separator>
        <q-list-header>Essential Links</q-list-header>
        <q-item to="/docs">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item to="/forum">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item to="/chat">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item to="/twitter">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>
-->
    <!-- 右侧侧滑面板 -->
<!--
    <q-layout-drawer side="right" v-model="showRight">
      Right Side of Layout
    </q-layout-drawer>
-->
    <!-- 必须 -->
<!--
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-footer>
      页面页脚部分(可选-可为任何内容)
    </q-page-footer>
-->
  <q-table
    title="Table Title"
    :rows="tableData"
    :columns="columns"
    row-key="name"
  />
  <q-btn @click="pagination.page++" label="Next page" />
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import tableData from 'assets/table-data'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      tableData,
      msg: 'PageIndex',
      showLeft: false,
      showRight: false,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: 'name',
          sortable: true
        },
        { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      pagination: {
        sortBy: null, // 字符串，列“name”属性值
        descending: false,
        page: 1,
        rowsPerPage: 5 // 当前每页显示的行数
      }
    }
  },
  created () {
    console.log(tableData)
  },
  methods: {
    clickItem () {
      alert('PageIndex')
    }
  },
  computed: {

  }
})
</script>
