<template>
  <header class="footer">
    <div class="footer-content">
      <h6>D.Azzalini, F.Azzalini, C.Criscuolo, T.Dolci, D.Martineghi and S.Amer-Yahia, 2022</h6>
      <!-- NO USED
        <nav class="right">
        <div
          v-for="(item, itemIndex) of menuOptions"
          :key="'menu-item-' + itemIndex"
          class="menu-item"
        >
          <nuxt-link :to="item.path">
            {{ item.name }}
          </nuxt-link>
        </div>
      </nav>-->
    </div>
  </header>
</template>

<script>
export default {
  /* OLD VERSION
  data() {
    return {
      /* menuOptions: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Blog',
          path: '/blog',
        },
        {
          name: 'About',
          path: '/about',
        },
      ],
    }
  },
  */
}
</script>

<style>
.footer {
  height: 25px;
  background: #0077b6;
  color: white;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.footer-content {
  width: 100%;
  max-width: 500px;
  margin: auto;
  align-items: center;
}
.right {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  max-width: 100%;
}
.h5{
  margin-bottom: 1px;
  font-size: 0.85rem;
}
</style>
