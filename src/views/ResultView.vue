<template>
  <VotingResult :voteDatas="hubos" />
</template>
<script>
import VotingResult from "@/components/VotingResult.vue"
export default {
  components: {
    VotingResult,
  },
  data() {
    return {
      hubos: [
        { percentage: 10, hubo: "정지훈" },
        { percentage: 30, hubo: "이지민" },
        { percentage: 20, hubo: "홍규민" },
        { percentage: 10, hubo: "여상우" },
        { percentage: 10, hubo: "임현덕" },
        { percentage: 10, hubo: "이주현" },
      ],
    }
  },
}
</script>
