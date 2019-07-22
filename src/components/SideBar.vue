<template>
  <div class="sidebar">
    <div>
    <vs-sidebar reduce="reduce" v-model="active" hidden-background="hidden">
      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
      </div>
      <vs-sidebar-group open title="Application">
        <vs-sidebar-item index="1" icon="menu" @click="reduce=!reduce">
         Concepts
        </vs-sidebar-item>
        <vs-sidebar-item index="5" icon="verified_user">
         Encryption
        </vs-sidebar-item>
        <vs-sidebar-group title="Computing Concepts">
          <vs-sidebar-item :to='"bits"' index="2.1" icon="store">
            Bits
          </vs-sidebar-item>
          <vs-sidebar-item index="2.2" icon="nature_people">
            Circuits
          </vs-sidebar-item>
          <vs-sidebar-item index="2.3" icon="style">
            Processing
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item index="2" icon="gavel">
          History
        </vs-sidebar-item>
        <vs-sidebar-item index="3" icon="https">
          Security
        </vs-sidebar-item>
        <vs-sidebar-item index="4" icon="help">
          Help
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item index="6" icon="account_box">
        About Us
      </vs-sidebar-item>
    </vs-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data: () => ({
    active:true,
    hidden: true
  })
}
</script>

<style scoped>

</style>
