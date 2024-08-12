<script lang="ts">
  import { format } from 'date-fns/format';

  let time = '00:00 AM';
  let date = '00-00-0000';

  function startClock(_node: HTMLElement) {
    window.setInterval(() => {
      const d = new Date();
      time = format(d, 'hh:mm a');
      date = format(d, 'MM-dd-yyyy');
    }, 500);
  };
</script>

<div class="layout" use:startClock>
  <div class="time">{time}</div>
  <div class="date">{date}</div>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .time {
    font-size: 200px;
    line-height: 65%;
  }
  
  .date {
    font-size: 80px;
    line-height: 65%;
  }
</style>