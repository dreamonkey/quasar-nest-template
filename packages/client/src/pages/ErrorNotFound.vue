<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div class="error-code">404</div>

      <div class="text-h2 error-message">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-code {
  font-size: 30vh;
}

.error-message {
  opacity: 0.4;
}
</style>
